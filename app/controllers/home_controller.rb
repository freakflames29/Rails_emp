class HomeController < ApplicationController

before_action :require_login,except:[:login,:appr]


  def index
  end
  
  def doc
  end

  def login
    @er=nil
  end

  def appr
    passcode = params[:login] 
    if passcode == 'balerjob'
      session[:pass]='loveyou'
      redirect_to root_path 
    else
      @er='red border_red'
      render :login
    end
  end

end
