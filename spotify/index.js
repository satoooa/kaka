// 必要なモジュールの読み込み
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 3000;

// CORS対応
app.use(cors());
app.use(express.static('public')); // publicフォルダ内のファイルを静的に提供

// Spotify APIの認証トークンとアーティストID（適宜変更）
const accessToken = 'YOUR_ACCESS_TOKEN';  // ここにアクセストークンを入力
const artistId = 'YOUR_ARTIST_ID';        // ここにアーティストIDを入力

// 人気の曲を取得するAPIエンドポイント
app.get('/top-tracks', async (req, res) => {
  const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=JP`;

  try {
    const response = await axios.get(url, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      }
    });
    res.json(response.data.tracks);  // 人気の曲データを返す
  } catch (error) {
    res.status(500).send('Error retrieving data from Spotify');
  }
});

// サーバーを起動
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});