const provider = new ethers.BrowserProvider(window.ethereum);

let signer = ''

$(document).on('click', '#wallet', async () => {
    // 调起钱包
    await provider.send('eth_requestAccounts', []);
    signer = await provider.getSigner();
    // 任何钱包的操作都要通过signer签名
    const address = await signer.getAddress();
    $('#address').html(address);
    let pendingBal = await provider.getBalance(address, 'pending');
    let balance = ethers.formatEther(pendingBal);
    console.log('pendingBal: ', balance);
  });
  