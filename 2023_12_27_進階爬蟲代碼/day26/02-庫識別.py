

import ddddocr


def text_dis():
    det = ddddocr.DdddOcr(det=False, ocr=False, show_ad=False)
    with open('bg.png', 'rb') as f:
        target_bytes = f.read()
    with open('full.png', 'rb') as f:
        background_bytes = f.read()
    print(target_bytes, background_bytes)
    res = det.slide_match(target_bytes, background_bytes)

    print(res)


if __name__ == '__main__':
    text_dis()

