function vendor_gen()
{
	const vendor_name=document.getElementById('vendor_name').value
	const vendor_company=document.getElementById('vechicle_comp').value
	const is_veh=document.getElementById('vechicle_drop').value
	const odc=document.getElementById('odc').value

	const vendor_email_sub=document.getElementById('vendor_email_sub')
	const vendor_email_body=document.getElementById('vendor_email_body')

	vendor_email_sub.value=`Approval for vendor visit at ${odc}`;	

	if (is_veh==='Y') {
		const veh_num = prompt('Enter Vehicle number');
		vendor_email_body.innerHTML = `Dear Team,
Kindly allow the below mentioned vendor to enter inside ${odc}.

Name: ${vendor_name}
Company: ${vendor_company}
Vehicle number: ${veh_num}
`;
	}
	else
	{
		vendor_email_body.innerHTML = `Dear Team,
Kindly allow the below mentioned vendor to enter inside ${odc}.

Name: ${vendor_name}
Company: ${vendor_company}
`;
	}
}

function vendor_body_copy()
{
	fuckitcopyit('vendor_email_body');
}
function vendor_sub_copy() {
	fuckitcopyit('vendor_email_sub')
}