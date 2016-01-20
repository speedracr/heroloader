Rails.application.routes.draw do
  root 'pages#index'
  resources :users
  get '/yesbaby', to: 'pages#yesbaby'
end
