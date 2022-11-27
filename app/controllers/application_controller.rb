class ApplicationController < ActionController::Base



	def check_login
		if session[:pass]
			return true
		else
			return false
		end
	end


	def require_login
		if !check_login
			redirect_to login_path
		end
	end
end
