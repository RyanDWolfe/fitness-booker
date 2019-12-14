class Reservation < ApplicationRecord

    belongs_to :user
    belongs_to :studio_class
    belongs_to :studio

end
