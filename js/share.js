const linkedinBtn = [...document.querySelectorAll('.linkedin-share-btn')];
const facebookBtn = [...document.querySelectorAll('.fb-share-btn')];
const xBtn = [...document.querySelectorAll('.x-share-btn')];
const whatsappBtn = [...document.querySelectorAll('.whatsapp-share-btn')];
const emailBtn = [...document.querySelectorAll('.email-share-btn')];

// ✅ Get orgName and mapsLink from localStorage
function getShareDetails() {
    const orgName = localStorage.getItem('orgName') || "";
    const mapsLink = localStorage.getItem('mapsLink') || "";
    return { orgName, mapsLink };
}

// ✅ LinkedIn Share
linkedinBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const { orgName, mapsLink } = getShareDetails();
        const shareUrl = "https://www.linkedin.com/sharing/share-offsite";
        const params = new URLSearchParams({ url: mapsLink }).toString();

        window.open(`${shareUrl}?${params}`, "_blank", "width=600,height=400");
    });
});

// ✅ Facebook Share
facebookBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const { orgName, mapsLink } = getShareDetails();
        const fbShareUrl = "https://www.facebook.com/sharer/sharer.php";
        const params = new URLSearchParams({ u: mapsLink }).toString();

        window.open(`${fbShareUrl}?${params}`, "_blank", "width=600,height=400");
    });
});

// ✅ X (Twitter) Share
xBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const { orgName, mapsLink } = getShareDetails();
        const tweetText = encodeURIComponent(`${orgName}\n${mapsLink}`);
        const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;

        window.open(tweetUrl, "_blank", "width=600,height=400");
    });
});

// ✅ WhatsApp Share
whatsappBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const { orgName, mapsLink } = getShareDetails();
        const text = `${orgName}\n${mapsLink}`;
        const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;

        window.open(shareUrl, "_blank");
    });
});

// ✅ Email Share
emailBtn.forEach((button) => {
    button.addEventListener('click', () => {
        const { orgName, mapsLink } = getShareDetails();
        const subject = orgName;
        const body = mapsLink;

        const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl, "_self");
    });
});
