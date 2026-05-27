import re

def insert_3d_section():
    file_path = r'c:\Users\punch\Desktop\Thumbtoe\index.html'
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # We look for the end of the hero slider section
    pattern = re.compile(r'(<!-- Hero Showcase Slider -->.*?</section>)', re.DOTALL)
    
    html_to_insert = """

    <!-- 3D Model Interactive Showcase -->
    <section class="section model-3d-section" id="interactive-3d">
        <div class="container" style="text-align: center;">
            <div class="viewer-header" style="margin-bottom: 2rem;">
                <span class="section-tag" data-en="Interactive 3D" data-th="ประสบการณ์ 3 มิติ">Interactive 3D</span>
                <h2 class="section-title" data-en="Explore Every Angle" data-th="หมุนดูรายละเอียดได้ 360 องศา">Explore Every Angle</h2>
                <p class="section-desc" data-en="Drag to rotate and interact. (Placeholder model)" data-th="ลองคลิกค้างแล้วลากเพื่อหมุนดูรอบทิศทาง (ปัจจุบันเป็นโมเดลรองเท้าจำลองชั่วคราว)">Drag to rotate and interact. (Placeholder model)</p>
            </div>
            
            <div class="model-wrapper">
                <model-viewer src="https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/MaterialsVariantsShoe/glTF-Binary/MaterialsVariantsShoe.glb" 
                              ar ar-modes="webxr scene-viewer quick-look" 
                              camera-controls 
                              auto-rotate
                              shadow-intensity="1"
                              shadow-softness="1"
                              exposure="1"
                              interaction-prompt="auto">
                    
                    <button slot="ar-button" id="ar-button" data-en="View in AR" data-th="ดูแบบ AR">
                        View in AR
                    </button>
                </model-viewer>
                
                <!-- Placeholder Notice -->
                <div class="model-notice">
                    <p><i class="fa-solid fa-lightbulb"></i> <span data-th="หากคุณมีไฟล์ 3D ถุงเท้าของคุณแล้ว (.glb) สามารถนำมาใส่ตรงนี้ได้ทันทีครับ" data-en="Replace this with your custom 3D sock model (.glb file)">หากคุณมีไฟล์ 3D ถุงเท้าของคุณแล้ว (.glb) สามารถนำมาใส่ตรงนี้ได้ทันทีครับ</span></p>
                </div>
            </div>
        </div>
    </section>"""
    
    new_content = pattern.sub(r'\1' + html_to_insert, content, count=1)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print("3D section inserted successfully.")

insert_3d_section()
