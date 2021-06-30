import React,{useEffect} from 'react'
import Header from "../components/Header"

export default function Practice() {
    var file;
    // var fileName="lokesh";
    const url = 'https://cdn.shopify.com/s/files/1/0234/8017/2591/products/young-man-in-bright-fashion_925x_f7029e2b-80f0-4a40-a87b-834b9a283c39.jpg?v=1572867553'
    // const url = 'https://cdn.shopify.com/s/files/1/0234/8017/2591/products/young-man-in-bright-fashion_925x_f7029e2b-80f0-4a40-a87b-834b9a283c39.jpg?v=1572867553'
    const fileName = 'myFile.jpg'
    // const url="images/fox1.jpg";
    const shareData = {
    title: 'MDN',
    text: 'Learn web development on MDN!',
    url: 'https://developer.mozilla.org'
    
    }
   
    useEffect(() => {
      const url="/images/2282.jpg";
      fetch(url).then(async response=>
        {
            const contentType = response.headers.get('content-type');
            console.log(contentType)
            const blob =await response.blob()
            console.log(blob)
            file = new File([blob], fileName, {type: contentType })
         
            // file.type=contentType;
            console.log(file)
         
            shareData.files=[file];
        })
        




    }, [])



    return (
        <div>
            <Header />
            <img src="images/2282.jpg" width="240px" alt="a fox picture" />
            {/* <input type="file" id="input" /> */}
            <button onClick={  async () => {

                // const files=document.getElementById("input").files;
                // console.log(files);
                // shareData.files=files;  
                console.log("share data is");
                console.log(shareData);
                // shareData.files=files;
                try {
                
                console.log("inside try"); 
                await navigator.share(shareData)
                

                } 
                catch(e) {
                console.log(e);
                // alert("error")
                // resultPara.textContent = 'Error: ' + err
                }
            }
}
                





           class="add-button">Share this picture</button>

        </div>
    )
}
