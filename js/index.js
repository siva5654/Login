




		$('.sc-form').submit(function(){
		if($('.sc-formIp').val() == '')
		{
		$('.sc-formIp').parent().addClass('formError1');
		return false;
		}
		else{
		$('.sc-formIp').parent().removeClass('formError1');
		}
		
		if($('.sc-formpswd').val() == '')
		{
		$('.sc-formpswd').parent().addClass('formError1');
		return false;
		}
		else{
		$('.sc-formpswd').parent().removeClass('formError1');
		}
		})