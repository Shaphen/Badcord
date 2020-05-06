Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resources :servers, only: [:create, :destroy, :update, :show, :index]
    resources :channels, only: [:index, :show, :update, :create, :destroy]
    resources :channel_messages, only: [:index, :create, :update, :destroy]

    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
  
end
