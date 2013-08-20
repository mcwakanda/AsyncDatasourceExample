
guidedModel =// @startlock
{
	DataClass1 :
	{
		methods :
		{// @endlock
			serverMethod:function(clientMessage)
			{// @lock
				debugger;
				//setting the message from the server!!
				return clientMessage + " & " + "This message is from the server";
			}// @startlock
		}
	}
};// @endlock
