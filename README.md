# GeoBazar Company Team Build

Добавлено:
- business.html — кабинет компании
- company.html — публичная страница компании
- company-team.html — сотрудники и приглашения
- billing.html — пакеты и счёт
- companies.js — логика компаний
- company-team.js — логика сотрудников
- create-listing.html — выбор публикации от частного лица или компании

Загрузите все файлы в корень GitHub репозитория с заменой старых.


Verification build:
- verification.html — заявка на верификацию
- verification.js — загрузка документов в private bucket verification-documents


MVP Frontend 1.0:
- i18n.js — нормальный выбор языка RU/KA/AZ/EN/AM
- favorites.html/js — избранное
- messages.html, conversation.html, chat.js — чат
- notifications.html/js — уведомления
- reviews.html/js — отзывы
- edit-listing.html/js — редактирование, архив, VIP, поднятие, статистика
- admin.html + admin-* — первая админ-панель


Dashboard + Support + Payments build:
- dashboard.html — личный кабинет пользователя
- company-dashboard.html — кабинет компании
- support.js — плавающая кнопка поддержки
- billing.js — подготовка платежей
- SUPABASE_NEXT_SQL.sql — SQL для support_tickets и payment_transactions


Logout fix:
- auth.js fixed
- ui.js fixed
- logout.html added for emergency logout


Locations final:
- locations.js — выбор регион → муниципалитет → город/село
- GEORGIA_LOCATIONS_STARTER.sql — стартовая база регионов/муниципалитетов/основных городов и сёл
- locations_import_template.csv — шаблон для полной загрузки всех сёл
- LOCATIONS_IMPORT_README.txt — инструкция импорта


Smart category fields:
- category-fields.js — умные поля по категориям
- SMART_CATEGORY_FIELDS_SQL.sql — добавляет listings.parameters jsonb
- create-listing/edit-listing сохраняют параметры в JSON
