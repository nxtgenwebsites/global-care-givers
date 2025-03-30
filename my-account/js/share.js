const facebookBtn = [...document.querySelectorAll('.fb-share-btn')];
const xBtn = [...document.querySelectorAll('.x-share-btn')];
const whatsappBtn = [...document.querySelectorAll('.whatsapp-share-btn')];
const emailBtn = [...document.querySelectorAll('.email-share-btn')];

facebookBtn.map((button) => {
    button.addEventListener(('click'), () => {
        const fbShareUrl = "https://www.facebook.com/sharer/sharer.php";
        const params = new URLSearchParams({
            u: "https://health-monitor-sa.vercel.app/", // Your website URL
            quote: "The Health Care Facilities Database allows hospitals, emergency centers, pharmacies, and other medical services to list their information, making it easily searchable by users worldwide to find reliable care nearby.", // Text to share
            hashtag: "#healthMonitor", // Optional hashtag
        }).toString();

        const shareUrl = `${fbShareUrl}?${params}`;
        window.open(shareUrl, "_blank", "width=600,height=400");
    })
})


facebookBtn.map((button) => {
    button.addEventListener(('click'), () => {
        const fbShareUrl = "https://www.facebook.com/sharer/sharer.php";
        const params = new URLSearchParams({
            u: "https://health-monitor-sa.vercel.app/", // Your website URL
            quote: "The Health Care Facilities Database allows hospitals, emergency centers, pharmacies, and other medical services to list their information, making it easily searchable by users worldwide to find reliable care nearby.", // Text to share
            hashtag: "#healthMonitor", // Optional hashtag
        }).toString();

        const shareUrl = `${fbShareUrl}?${params}`;
        window.open(shareUrl, "_blank", "width=600,height=400");
    })
})

xBtn.map((button) => {
    button.addEventListener(('click'), () => {
        const tweetText = encodeURIComponent("The Health Care Facilities Database allows hospitals, emergency centers, pharmacies, and other medical services to list their information, making it easily searchable by users worldwide to find reliable care nearby. : https://health-monitor-sa.vercel.app/ #healthMonitor");
        const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
        window.open(tweetUrl, "_blank", "width=600,height=400");
    })
})

whatsappBtn.map((button) => {
    button.addEventListener(('click'), () => {
        const whatsappShareUrl = "https://api.whatsapp.com/send";
        const params = new URLSearchParams({
            text: "The Health Care Facilities Database allows hospitals, emergency centers, pharmacies, and other medical services to list their information, making it easily searchable by users worldwide to find reliable care nearby: https://health-monitor-sa.vercel.app/"
        }).toString();

        const shareUrl = `${whatsappShareUrl}?${params}`;
        window.open(shareUrl, "_blank");
    })
})

emailBtn.map((button) => {
    button.addEventListener(('click'), () => {
        const emailShareUrl = "mailto:";
        const params = new URLSearchParams({
            subject: "Check out Health Monitor!",
            body: "The Health Care Facilities Database allows hospitals, emergency centers, pharmacies, and other medical services to list their information, making it easily searchable by users worldwide to find reliable care nearby.: https://health-monitor-sa.vercel.app/"
        }).toString();

        const shareUrl = `${emailShareUrl}?${params.replace(/&/g, '%0A')}`; // Replace '&' with newline
        window.open(shareUrl, "_self")
    })
})
