Rails.application.routes.draw do
  get 'servers/index'
  get 'servers/create'
  get 'servers/edit'
  get 'servers/destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
  end
  
  root to: 'static_pages#root'
  
end
