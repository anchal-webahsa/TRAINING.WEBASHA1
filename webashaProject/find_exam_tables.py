import sqlite3

def find_exam_tables():
    conn = sqlite3.connect('db.sqlite3')
    cursor = conn.cursor()
    cursor.execute("SELECT name FROM sqlite_master WHERE type='table' AND name LIKE '%exam%'")
    tables = cursor.fetchall()
    for table in tables:
        print(table[0])
    conn.close()

if __name__ == '__main__':
    find_exam_tables()
