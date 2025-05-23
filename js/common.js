// header > hamberger menu
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("show");
}
document.addEventListener('DOMContentLoaded', () => {
    const cloudinaryOptimize = (url, type) => {
      // Cloudinary URL 변형 삽입 지점 찾기
      const insertIndex = url.indexOf('/upload/') + 8;
      const transform =
        type === 'image' ? 'q_auto,f_auto,w_600/' : 'q_auto,f_auto,vc_auto,w_720/';
      return url.slice(0, insertIndex) + transform + url.slice(insertIndex);
    };

    // 이미지 최적화
    document.querySelectorAll('img').forEach(img => {
      const src = img.getAttribute('src');
      if (src && src.includes('res.cloudinary.com')) {
        img.setAttribute('src', cloudinaryOptimize(src, 'image'));
      }
    });

    // 비디오 최적화
    document.querySelectorAll('video').forEach(video => {
      const src = video.getAttribute('src');
      if (src && src.includes('res.cloudinary.com')) {
        video.setAttribute('src', cloudinaryOptimize(src, 'video'));
      }
    });
  });