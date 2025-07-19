document.addEventListener('DOMContentLoaded', function() {
	const generateBtn = document.getElementById('generateBtn');
	const topicInput = document.getElementById('topicInput');
	const resultDiv = document.getElementById('result');

	generateBtn.addEventListener('click', function() {
		const topic = topicInput.value;
		if (!topic) {
			alert('请输入视频主题！');
			return;
		}

		const url = `https://api.52vmy.cn/api/chat/spark?msg=请帮我生成一个关于“${topic}”的小红书短视频文案`;

		resultDiv.innerHTML = '正在生成文案...';

		fetch(url)
			.then(response => response.json())
			.then(data => {
				if (data.code === 200) {
					resultDiv.innerHTML = data.data.answer.replace(/\n/g, '<br>');
				} else {
					resultDiv.innerHTML = '生成失败，请稍后再试。';
				}
			})
			.catch(error => {
				console.error('Error:', error);
				resultDiv.innerHTML = '生成失败，请检查网络连接。';
			});
	});
});
