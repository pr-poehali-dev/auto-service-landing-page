import json
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart


def handler(event: dict, context) -> dict:
    """Отправка заявки с формы на email через zakaz@24razval.ru"""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")
    name = body.get("name", "").strip()
    phone = body.get("phone", "").strip()
    car = body.get("car", "").strip()
    year = body.get("year", "").strip()

    if not all([name, phone, car, year]):
        return {
            "statusCode": 400,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "Все поля обязательны"}),
        }

    # Исправлено: корректный порт для SSL/TLS (465) вместо 25
    smtp_host = "smtp.timeweb.ru"
    smtp_port = 465  # Порт 465 используется для SSL-соединения
    smtp_user = "zakaz"
    smtp_password = "00000000rrr"
    sender = "zakaz@24razval.ru"
    recipient = "55indidi55@gmail.com"

    html_body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; background: #f5f5f5; padding: 20px;">
      <div style="max-width: 480px; background: #fff; border: 1px solid #ddd; padding: 24px; border-radius: 6px;">
        <h2 style="color: #f59e0b; margin: 0 0 16px;">Новая заявка — AGS Автосервис</h2>
        <table style="width:100%; border-collapse: collapse;">
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px 0; color: #888; width: 40%;">Имя</td>
            <td style="padding: 8px 0; font-weight: bold;">{name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px 0; color: #888;">Телефон</td>
            <td style="padding: 8px 0; font-weight: bold;">{phone}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 8px 0; color: #888;">Автомобиль</td>
            <td style="padding: 8px 0; font-weight: bold;">{car}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #888;">Год выпуска</td>
            <td style="padding: 8px 0; font-weight: bold;">{year}</td>
          </tr>
        </table>
        <p style="margin: 20px 0 0; color: #888; font-size: 12px;">
          Заявка отправлена через сайт AGS — диагностика износа шин
        </p>
      </div>
    </body>
    </html>
    """

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Новая заявка: {name} — {car} {year}"
    msg["From"] = sender
    msg["To"] = recipient
    msg.attach(MIMEText(html_body, "html", "utf-8"))

    try:
        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(sender, recipient, msg.as_string())
        return {
            "statusCode": 200,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"ok": True}),
        }
    except Exception as e:
        # Добавлено: обработка ошибок для отладки
        return {
            "statusCode": 500,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": str(e)}),
        }
