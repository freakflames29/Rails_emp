function closeFunc()
{
    const tick_number=document.getElementById('tc_tick_number').value
    const ticket_username=document.getElementById('tc_uname').value
    const tick_sub=document.getElementById('tc_email_sub')
    const tick_body=document.getElementById('tc_msg_field')

    tick_sub.value=`Resolving Ticket | Ticket number:${tick_number}`
    tick_body.innerHTML=`Dear ${ticket_username[0]+ticket_username.slice(1).toLowerCase()},

As discussed, needful has been done issue is resolved.
Hence I am closing the ticket to avoid further aging.

We prefer NOT TO REOPEN the ticket.

If you face any challenge, please reach out to me-2297004/ Reply on this mail chain/ Call me on undersigned number or if I am not
available you can email my leads suvajit.bhattacharya@tcs.com and de.avishek@tcs.com for urgent help.    
`
   
}
function copy_ticket_closing_sub()
{
    const body=document.getElementById('tc_email_sub');
   body.select();
   body.setSelectionRange(0, 99999);
   navigator.clipboard.writeText(body.value);
}
function copy_ticket_closing_body()
{
    const body=document.getElementById('tc_msg_field');
   body.select();
   body.setSelectionRange(0, 99999);
   navigator.clipboard.writeText(body.value);
}