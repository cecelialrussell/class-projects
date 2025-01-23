click_count = 0

def count_clicks():
    global click_count
    click_count += 1
    return click_count

print(count_clicks())