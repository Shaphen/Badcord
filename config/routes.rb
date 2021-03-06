Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create]
    resources :servers, only: [:create, :destroy, :update, :show, :index]
    resources :channels, only: [:index, :show, :update, :create, :destroy]
    resources :channel_messages, only: [:index, :create, :update, :destroy]
    post 'servers/join', to: 'servers#join'
    delete 'servers', to: 'servers#leave'

    resource :session, only: [:create, :destroy]
  end

  root to: 'static_pages#root'
  mount ActionCable.server, at: '/cable'
  
end
