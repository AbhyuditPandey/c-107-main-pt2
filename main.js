//https://teachablemachine.withgoogle.com/models/-rvpPGOY1/
function start()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json',modelready);
    }

    function modelready()
    {
        classifier.classify(gotresult);
        
    }

    function gotresult(error,results) {
        if(error)
        {
            console.error(error);
     }

     else{
        console.log(results);
        random_r=Math.floor(Math.random()* 255)+1;
        random_g=Math.floor(Math.random()* 255)+1;
        random_b=Math.floor(Math.random()* 255)+1;

        document.getElementById("result_label").innerHTML="I can hear : "+results[0].label;
        document.getElementById("result_confidence").innerHTML="Confidence"+(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_r+","+random_g+","+random_b+")";
        document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";

        img=document.getElementById('img1');
       

        if(results[0].label=="Barking")
        {
            img.src="dog.gif";
                   }

        if(results[0].label=="Meowing")
        {
            img.src="cat.gif";
        }

        /*if(results[0].label=="bell")
        {
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.gif";
            img4.src="aliens-04.png";
        }

        if(results[0].label=="Background Noise")
        {
            img1.src="aliens-01.png";
            img2.src="aliens-02.png";
            img3.src="aliens-03.png";
            img4.src="aliens-04.gif";
        }

     }

     
     
    }*/
}
}