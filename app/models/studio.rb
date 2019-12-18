class Studio < ApplicationRecord

    has_many :studio_classes
    has_many :reservations
end