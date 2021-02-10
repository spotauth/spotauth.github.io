$(() => {
	const urlParams = new URLSearchParams(window.location.search);
	const codeParam = urlParams.get('code');
	const approvalCode = $("#approvalCode");
	approvalCode.val(codeParam);
	approvalCode.click(() => approvalCode.select());
});