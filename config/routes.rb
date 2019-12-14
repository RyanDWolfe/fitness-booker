Rails.application.routes.draw do
  scope '/api/v1' do
    resources :users only: [:create, :show, :destroy]
    resources :studios
    resources :studio_classes
    resources :reservations only: [:create, :update, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
