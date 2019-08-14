Rails.application.routes.draw do
  resources :cards
  resources :columns
  resources :swimlanes
  resources :boards
  root to: 'home#index'
  get 'home/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
