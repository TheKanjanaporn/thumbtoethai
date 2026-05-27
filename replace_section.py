import re

def replace_section():
    file_path = r'c:\Users\punch\Desktop\Thumbtoe\index.html'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Use regex to find the event section and replace it
    # We look for <!-- Event Exclusive Interactive Coupon Section --> and the corresponding </section>
    pattern = re.compile(r'<!-- Event Exclusive Interactive Coupon Section -->.*?</section>', re.DOTALL)
    
    replacement = """<!-- Size Guide Section -->
    <section class="section size-guide-section" id="size">
        <div class="container">
            <div class="size-guide-wrapper">
                <img src="assets/Size.jpeg" alt="Thumb Toe Size Guide" class="size-guide-img">
            </div>
        </div>
    </section>"""
    
    new_content = pattern.sub(replacement, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("Section replaced successfully.")

replace_section()
