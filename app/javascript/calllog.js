function tick_call_fun()
{
	const tick_number=document.getElementById('tcall_tnumber').value
	const ticket_username=document.getElementById('tcall_uname').value

	const vendor = document.getElementById('vendor_list').value
	const case_id = document.getElementById('tcall_caseid').value


	// console.log([tick_number,tcall_uname,vendor,case_id])

	const email_sub=document.getElementById('tcall_sub')
	const email_body=document.getElementById('tcall_msg')

	email_sub.value=`Resolving Ticket | Ticket Number: ${tick_number}`;

	email_body.innerHTML=`Dear ${ticket_username[0]+ticket_username.slice(1).toLowerCase()},

As discussed, call log has been done with ${vendor}. The case number is ${case_id}. An engineer will be visiting to replace the faulty parts of the system within  next 3-5 working days.
Kindly connect me once the engineer contacts you so that we can take necessary approvals.
Also if you face any kind of issue kindly let us know that we can allocate a temporary asset at office to avoid any type of production loss.

Hence I am closing the ticket to avoid further aging.

We prefer NOT TO REOPEN the ticket.

If you face any challenge, please reach out to me-2297004/ Reply on this mail chain/ Call me on undersigned number or if I am not available you can email my leads suvajit.bhattacharya@tcs.com and de.avishek@tcs.com for urgent help.

`;

}


function fuckitcopyit(select)
{
	const sel=select;
	 const body=document.getElementById(select);
   body.select();
   body.setSelectionRange(0, 99999);
   navigator.clipboard.writeText(body.value);
}

function copy_tick_call_close_sub()
{
	fuckitcopyit('tcall_sub');
}
function copy_tick_call_close_body()
{
	fuckitcopyit('tcall_msg');
	
}