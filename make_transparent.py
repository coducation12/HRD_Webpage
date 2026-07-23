import sys
from PIL import Image

def make_transparent(input_path, output_path):
    try:
        img = Image.open(input_path)
        img = img.convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Check if pixel is close to black (handling jpeg artifacts)
            if item[0] < 30 and item[1] < 30 and item[2] < 30:
                newData.append((255, 255, 255, 0)) # transparent
            else:
                newData.append(item)
                
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully processed {input_path} -> {output_path}")
    except Exception as e:
        print(f"Error processing {input_path}: {e}")

if __name__ == "__main__":
    # The user's uploaded images
    jeonnam_src = r"C:\Users\tech_ha\.gemini\antigravity-ide\brain\976031c4-5bff-46f5-aa9b-3fc9f656fd82\media__1784795972969.png"
    gwangyang_src = r"C:\Users\tech_ha\.gemini\antigravity-ide\brain\976031c4-5bff-46f5-aa9b-3fc9f656fd82\media__1784795964842.png"
    
    jeonnam_dst = r"c:\Users\tech_ha\Desktop\Project Files\HRD\public\jeonnam_transparent.png"
    gwangyang_dst = r"c:\Users\tech_ha\Desktop\Project Files\HRD\public\gwangyang_transparent.png"
    
    make_transparent(jeonnam_src, jeonnam_dst)
    make_transparent(gwangyang_src, gwangyang_dst)
