{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, 'url' | 'data' | 'h'>; // 어떤 종류의 key든 전달 가능

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'http://..',
      data: 'byte-data..',
    }


  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: 'hi'
    }
  }
  }
}
