Rails.application.routes.draw do
  
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  
  

  devise_scope :user do
    authenticated :user do
      root 'trip#index'
    end
  
    unauthenticated do
      root 'devise/sessions#new'
    end
  end

  # get 'hello_world', to: 'hello_world#index'
  #get 'chat/new'
  #get "/chat" => redirect("http://localhost:8080")
  get 'trip/index'

  get 'trip/create'

  get 'trip/new'

  get 'trip/dashboard' => 'chat#dashboard'

  get '/trip/chat' => 'chat#new'
  get '/trip/chat/:tripid' => 'chat#trip'
  
  get 'user/index'

  get 'user/new'

  get 'user/create'

  get 'user/update'

  get 'home/index'

  post 'auth_user' => 'authentication#authenticate_user'
  get 'home' => 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
