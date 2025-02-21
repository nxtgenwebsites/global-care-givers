document.getElementById('linkedin-share-btn').addEventListener(('click'), () => {
    const shareUrl = "https://www.linkedin.com/sharing/share-offsite";

    const params = new URLSearchParams({
        url: "https://health-monitor-sa.vercel.app/",
        title: "Health Monitor",
        summary: "A smarter way to track and manage your health with our intuitive dashboard. Gain complete control over your well-being, all in one place", // Summary text
        source: "Health Monitor"
    }).toString();

    window.open(`${shareUrl}?${params}`, "_blank", "width=600,height=400");
})

document.getElementById('x-share-btn').addEventListener(('click'), () => {
    const tweetText = encodeURIComponent("A smarter way to track and manage your health with our intuitive dashboard. Gain complete control over your well-being, all in one place: https://health-monitor-sa.vercel.app/ #healthMonitor");
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(tweetUrl, "_blank", "width=600,height=400");
})

document.getElementById('fb-share-btn').addEventListener(('click'), () => {
    const fbShareUrl = "https://www.facebook.com/sharer/sharer.php";
    const params = new URLSearchParams({
        u: "https://health-monitor-sa.vercel.app/", // Your website URL
        quote: "A smarter way to track and manage your health with our intuitive dashboard. Gain complete control over your well-being, all in one place", // Text to share
        hashtag: "#healthMonitor", // Optional hashtag
    }).toString();

    const shareUrl = `${fbShareUrl}?${params}`;
    window.open(shareUrl, "_blank", "width=600,height=400");
})