import sqlite3

def check_migration():
    conn = sqlite3.connect('db.sqlite3')
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM django_migrations WHERE app='webashaApp' AND name='0046_exam'")
    row = cursor.fetchone()
    if row:
        print("Migration 0046_exam is applied.")
    else:
        print("Migration 0046_exam is NOT applied.")
    conn.close()

if __name__ == '__main__':
    check_migration()
