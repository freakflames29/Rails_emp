function gen_notrespond()
{
	const ticket_username=document.getElementById('notrespond_tc_uname').value
	const ticket_number=document.getElementById('notrespond_tick_number').value

	const tick_email_sub=document.getElementById('notrespond_tc_email_sub')
	const tick_email_body=document.getElementById('notrespond_tc_msg_field')

	tick_email_sub.value=`Regarding GHD Ticket | Ticket Number: ${ticket_number}`;

	tick_email_body.innerHTML=`Dear ${ticket_username[0]+ticket_username.slice(1).toLowerCase()} ,
Tried to reach you multiple times but the calls remains unanswered.
Kindly connect with me as soon as you can.
`;


}

function notrespond_sub_copy()
{
	fuckitcopyit('notrespond_tc_email_sub');
}
function notrespond_body_copy()
{
	fuckitcopyit('notrespond_tc_msg_field');
}