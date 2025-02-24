const linkedinBtn = [...document.querySelectorAll('.linkedin-share-btn')];
const facebookBtn = [...document.querySelectorAll('.fb-share-btn')];
const xBtn = [...document.querySelectorAll('.x-share-btn')];
const whatsappBtn = [...document.querySelectorAll('.whatsapp-share-btn')];
const emailBtn = [...document.querySelectorAll('.email-share-btn')];


console.log(whatsappBtn);


linkedinBtn.map((button) => {
    button.addEventListener(('click'), () => {
        const shareUrl = "https://www.linkedin.com/sharing/share-offsite";

        const params = new URLSearchParams({
            url: "https://health-monitor-sa.vercel.app/",
            title: "Health Monitor",
            summary: "A smarter way to track and manage your health with our intuitive dashboard. Gain complete control over your well-being, all in one place", // Summary text
            source: "Health Monitor"
        }).toString();

        window.open(`${shareUrl}?${params}`, "_blank", "width=600,height=400");
    })
})


facebookBtn.map((button) => {
    button.addEventListener(('click'), () => {
        const fbShareUrl = "https://www.facebook.com/sharer/sharer.php";
        const params = new URLSearchParams({
            u: "https://health-monitor-sa.vercel.app/", // Your website URL
            quote: "A smarter way to track and manage your health with our intuitive dashboard. Gain complete control over your well-being, all in one place", // Text to share
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
            quote: "A smarter way to track and manage your health with our intuitive dashboard. Gain complete control over your well-being, all in one place", // Text to share
            hashtag: "#healthMonitor", // Optional hashtag
        }).toString();

        const shareUrl = `${fbShareUrl}?${params}`;
        window.open(shareUrl, "_blank", "width=600,height=400");
    })
})

xBtn.map((button) => {
    button.addEventListener(('click'), () => {
        const tweetText = encodeURIComponent("A smarter way to track and manage your health with our intuitive dashboard. Gain complete control over your well-being, all in one place: https://health-monitor-sa.vercel.app/ #healthMonitor");
        const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
        window.open(tweetUrl, "_blank", "width=600,height=400");
    })
})

whatsappBtn.map((button) => {
    button.addEventListener(('click'), () => {
        const whatsappShareUrl = "https://api.whatsapp.com/send";
        const params = new URLSearchParams({
            text: "A smarter way to track and manage your health with our intuitive dashboard. Gain complete control over your well-being, all in one place: https://health-monitor-sa.vercel.app/"
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
            body: "A smarter way to track and manage your health with our intuitive dashboard. Gain complete control over your well-being, all in one place: https://health-monitor-sa.vercel.app/"
        }).toString();

        const shareUrl = `${emailShareUrl}?${params.replace(/&/g, '%0A')}`; // Replace '&' with newline
        window.open(shareUrl, "_self")
    })
})
