class Studio < ApplicationRecord

    has_many :studio_class
    has_many :reservations

end
