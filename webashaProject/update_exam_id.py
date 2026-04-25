import sqlite3

def update_exam_code():
    try:
        conn = sqlite3.connect('db.sqlite3')
        cursor = conn.cursor()
        
        # Check if ex432 exists
        cursor.execute("SELECT id, title FROM webashaApp_exam WHERE exam_code = 'ex432'")
        row = cursor.fetchone()
        
        if row:
            print(f"Found exam: {row[1]} (ID: {row[0]}) with code ex432. Updating to ex200...")
            cursor.execute("UPDATE webashaApp_exam SET exam_code = 'ex200' WHERE exam_code = 'ex432'")
            conn.commit()
            print("Successfully updated!")
        else:
            # Check if it's already ex200
            cursor.execute("SELECT id, title FROM webashaApp_exam WHERE exam_code = 'ex200'")
            row = cursor.fetchone()
            if row:
                print(f"Exam already has code ex200: {row[1]}")
            else:
                print("Exam with code ex432 not found.")
        
        conn.close()
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    update_exam_code()
