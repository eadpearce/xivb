Rails.application.routes.draw do
  resources :characters
  scope :api do
    resources :users
    resources :characters
    post 'register', to: 'authentications#register'
    post 'login', to: 'authentications#login'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
