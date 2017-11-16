Rails.application.routes.draw do
  #get 'chat/new'

  get 'trip/index'

  get 'trip/create'

  get 'trip/new'
  get '/trip/chat' => 'chat#new'
  
  get 'user/index'

  get 'user/new'

  get 'user/create'

  get 'user/update'

  get 'home/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
