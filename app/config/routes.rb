Rails.application.routes.draw do
  devise_for :users, controllers: {
    registrations: 'users/registrations'
  }
  root 'home#home'
  
  devise_scope :user do
    authenticated :user do
    end
  
    unauthenticated do
      root 'devise/sessions#new'
    end
  end

  resources :users, only: [:show, :edit, :update]
  
  get 'trip/index'
  get 'trip/new'
  get 'trip/dashboard' => 'chat#dashboard'
  resources :trip, only: [:show, :edit, :update]

  # get 'hello_world', to: 'hello_world#index'
  #get 'chat/new'
  #get "/chat" => redirect("http://localhost:8080")

  get 'trip/create'

  post 'trip' => 'trip#create'
  put 'trip' => 'trip#update'


  get '/trip/chat' => 'chat#new'
  get '/trip/chat/:tripid' => 'chat#trip'
  
  get 'home/index'

  post 'auth_user' => 'authentication#authenticate_user'
  get 'home' => 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
