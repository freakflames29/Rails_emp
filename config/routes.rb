Rails.application.routes.draw do
  get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root 'home#index'
  get 'doc', to:'home#doc'

  get 'call',to:'ticket#call'
  get 'notrespond',to:'ticket#notrespond'
  get 'close',to:'ticket#close'
  get 'vendor',to:'ticket#vendor'


  get 'login',to:'home#login' 
  post 'login',to:'home#appr'

  delete 'logout',to:'home#destroy'

end
