let shareData = {
        title: 'POSTERWALL',
        text: 'Posterwall App',
        url: 'https://posterwall.netlify.app/',
      }

      const btn = document.querySelector('em');
      const resultPara = document.querySelector('.result');

      btn.addEventListener('click', () => {
        navigator.share(shareData)
          .then(() =>
            resultPara.textContent = 'POSTERWALL shared successfully'
          )
          .catch((e) =>
            resultPara.textContent = 'Error: ' + e
          )
      });

// copy
posterWall("", "rgba(255,255,255,.5)");
