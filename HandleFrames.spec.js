import{test,expect} from '@playwright/test';

test('test',async({page})=>{
    await page.goto('https://ui.vision/demo/webtest/frames/');

    const allframes=await page.frames()
    console.log("Number of frames",allframes.length)


    //approach 1
    const frame1=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
    frame1.fill("input[name='mytext1']","subi")

    //approach 2
    const inputbox=await page.frameLocator("frame[src='frame_3.html']").locator("[name='mytext3']")
    inputbox.fill("Hello")


    //nested frame
    const childFrames =await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'}).childFrames()
    await childFrames[0].locator("//*[@id='i6']/div[3]/div").check()

    await page.waitForTimeout(5000)

})