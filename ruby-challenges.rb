# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

#create a method named includes_letter that uses .include? to check for the specific letters
#also use .filter to return the wanted strings and leave out the unwanted strings in a new array

   
  def includes_letter(givenArray, string)
    givenArray.filter {|newArray| newArray.include? string}
  end

  p includes_letter(beverages_array, letter_o)
  p includes_letter(beverages_array, letter_t)

  #output: ["coffee", "soda water"]
  #output: ["tea", "water", "soda water"]

# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Vermont'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Vermont', 'Washington'] 

#from the hint, I found that .flatten takes all of the elements from multiple arrays and combines them into a new array, after that use .sort to get all of the states in alphabetical order but before all of that you have to use .values to access the values then you can apply .flatten and .sort

p us_states.values.flatten.sort

#output: ["California", "Arizona", "Nevada", "Maine", "New Hampshire", "Vermont", "Washington", "Oregon", "Idaho"]

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# make a class named Bike, but include the initialize method that will run everytime .new is called upon
# have a getter method to get bike info and a setter method to assign values
# add an attribute accessor to update the model in this case, but you can also update the speed and the number of wheels if needed
#use string interpolation in order for the output to display the model, wheel, and speed

class Bike 
    attr_accessor :model, :wheels, :current_speed
    def initialize(model)
      @model = model
      @wheels = 2
      @current_speed = 0
    end
    def bike_info
      "The #{@model} bike has #{@wheels} wheels, and is going #{@current_speed}mph."
    end
  
  p my_bike = Bike.new('Trek') 
  p my_bike.bike_info 

#output: #<Bike:0x000000012798af30 @model="Trek", @wheels=2, @current_speed=0>
#output: "The Trek bike has 2 wheels, and is going 0mph."


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

#make another method named pedal_faster that takes in a number that will add to the current speed of the bike
#make another method named brake that will take a given number that will subtract from the previous speed of the bike
#use if else statement with .negative to return 0 if the speed is ever negative
#wanted to add mph at the end

def pedal_faster(num)
    @current_speed = @current_speed + num
    "#{current_speed}mph"
  end
  def brake(num)
    if (@current_speed - num).negative?
        @current_speed = 0 
        "#{current_speed}mph"
    else
        @current_speed = @current_speed - num 
        "#{current_speed}mph"
    end
  end
end

my_bike = Bike.new('Trek')

p my_bike.pedal_faster(10)
p my_bike.pedal_faster(18)
p my_bike.brake(5)
p my_bike.brake(25)

#output: "10mph"
#output: "28mph"
#output: "23mph"
#output: "0mph"

