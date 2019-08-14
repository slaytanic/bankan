class Board < ApplicationRecord
  has_many :swimlanes, -> { order(position: :asc) }
end
