// Spotify APIから人気曲を取得して表示する関数
async function fetchTopTracks() {
    try {
      const response = await fetch('http://localhost:3000/top-tracks');
      const tracks = await response.json();
      
      const trackList = document.getElementById('track-list');
      trackList.innerHTML = ''; // 既存のリストをクリア
  
      // トラックをリストに追加
      tracks.forEach((track, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${track.name} (人気度: ${track.popularity})`;
        trackList.appendChild(listItem);
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // ページがロードされたときに人気曲を取得
  window.onload = fetchTopTracks;