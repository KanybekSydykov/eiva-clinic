export const getMediaType = (url: string) => {
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    const videoExtensions = ['mp4', 'webm', 'ogg'];
    const extension = url.split('.').pop()?.toLowerCase();
  
    if (imageExtensions.includes(extension!)) {
      return 'image';
    } else if (videoExtensions.includes(extension!)) {
      return 'video';
    } else {
      return 'unknown';
    }
  };