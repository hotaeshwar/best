import { useState, useRef, useEffect } from 'react';
import { Send, X, MessageCircle } from 'lucide-react';

const BestByBitesChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Good morning! I'm Alex from Best By Bites. Thank you for reaching out. How can I assist you today? Whether you're looking to download the app, find nearby surprise bags, or have questions about our service, I'm here to help.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Knowledge base with professional training data
  const knowledgeBase = {
    download: {
      patterns: ['download', 'app', 'install', 'get the app', 'how to start'],
      response: "To get started with Best By Bites, follow these steps:\n\nFor iPhone: Download from the App Store\nFor Android: Download from Google Play Store\n\nOnce installed, you'll need to:\n1. Create an account using your email address\n2. Enable push notifications to receive alerts about available surprise bags\n3. Set your location to discover nearby participating stores\n\nThe app is free to download and use. I'm Alex. Would you like assistance with the account setup process?"
    },
    surprise_bag: {
      patterns: ['surprise bag', 'what is', 'what are bags', 'bag contains'],
      response: "A Surprise Bag contains surplus food from participating restaurants, grocery stores, and food retailers that remains unsold but is completely safe and fresh.\n\nKey details:\nContents: A carefully selected mix of items that would otherwise be discarded\nPrice: Typically 30-50% off standard retail value\nCollection window: Each bag has a specific 2-3 hour collection period\nProcess: Collect in-store by presenting the app and completing the verification process\n\nThis model allows businesses to reduce food waste while offering customers quality food at reduced prices. I'm Alex. Would you like to know how to locate bags near you?"
    },
    collection_process: {
      patterns: ['collect', 'how to collect', 'collection process', 'pickup'],
      response: "The collection process consists of four straightforward steps:\n\n1. Browse and select: Open the app and choose a surprise bag from an available store\n2. Select time slot: Pick your preferred collection time from the available window\n3. Complete payment: Finalize your purchase through the app\n4. Collect: Visit the store during your selected time, present the app, and complete the in-app verification\n\nImportant points:\n- Collections must occur within the specified time window\n- The app serves as your receipt and proof of purchase\n- All food meets our quality and safety standards\n\nI'm Alex. Is there a specific step you'd like clarification on?"
    },
    food_safety: {
      patterns: ['safe', 'safety', 'quality', 'fresh', 'hygiene', 'health'],
      response: "Yes, all food in Best By Bites bags meets rigorous safety standards. Here's our approach:\n\nSource verification: We partner with established, verified food businesses\nFreshness standards: All items are well within their best-by dates\nQuality assurance: Items undergo quality checks before packing\nProper handling: All food is stored according to food safety regulations\nSupply chain control: We source only from legitimate food suppliers\n\nOur platform operates in 19 countries with millions of transactions. Food safety is fundamental to our business model.\n\nI'm Alex. Do you have concerns about specific types of products?"
    },
    ask_friend: {
      patterns: ['ask a friend', 'delegate', 'someone else', 'friend collect'],
      response: "Ask-a-Friend allows you to authorize another person to collect your surprise bag if you're unable to do so yourself.\n\nHow it works:\n1. Book your surprise bag normally\n2. In the app, select the Ask-a-Friend option\n3. Share the collection authorization with your designated person\n4. Your contact collects the bag by presenting the app on their phone\n\nBenefits:\n- Prevents food waste due to scheduling conflicts\n- Provides flexibility in collection arrangements\n- Does not require your contact to have the app installed\n- Maintains the same verification process for accountability\n\nI'm Alex. Does this feature interest you?"
    },
    parcels: {
      patterns: ['parcel', 'bulk', 'delivery', 'larger', 'home delivery'],
      response: "Best By Bites Parcels are larger bulk packages of surplus food offered through our marketplace, designed for wholesale or larger household purchases.\n\nKey differences from Surprise Bags:\nQuantity: Significantly larger volumes\nDelivery: Available for home delivery or designated pickup points\nDiscount: Typically 50-70% off retail value\nTarget use: Suitable for families, meal preparation, or small businesses\n\nHow to use Parcels:\n1. Browse available parcels in the marketplace section\n2. Select your preferred delivery or pickup method\n3. Schedule your collection or delivery time\n4. Receive at your chosen location\n\nI'm Alex. Are you interested in learning about parcel availability in your area?"
    },
    savings: {
      patterns: ['save', 'price', 'cost', 'discount', 'how much', 'money'],
      response: "Here are the typical savings figures:\n\nPricing structure:\n- Surprise Bags: 30-50% discount on retail value\n- Parcels: 50-70% discount on retail value\n- Average monthly savings: 15-30 GBP per user\n- Potential annual savings: 180-360 GBP\n\nCost example:\n- A bag with 20 GBP retail value typically costs 10-14 GBP\n- A parcel valued at 50 GBP typically costs 15-25 GBP\n- No subscription fees or hidden charges\n\nEnvironmental value:\nEach transaction prevents approximately 2.7kg of CO2 emissions that would result from food waste in landfills.\n\nI'm Alex. This represents both financial savings and environmental benefit. Interested in learning more?"
    },
    find_bags: {
      patterns: ['find', 'nearby', 'location', 'area', 'where', 'stores'],
      response: "To locate available surprise bags:\n\n1. Open the Best By Bites app\n2. Enable location services\n3. The map displays all participating stores in your area\n4. Use filters to narrow by:\n   - Store category (restaurant, bakery, grocery, etc.)\n   - Distance radius\n   - Available collection times\n   - Price range\n\nOptimization tips:\n- Bakeries typically offer fresh items in early morning hours\n- Restaurants feature surplus items during late afternoon\n- Weekend availability often includes expanded selections\n- Enable notifications for your preferred stores\n\nI'm Alex. The system updates regularly as new bags become available. What type of food are you interested in?"
    },
    food_waste: {
      patterns: ['waste', 'environment', 'sustainability', 'climate', 'impact'],
      response: "Food waste represents a significant environmental and economic concern:\n\nGlobal impact:\n- Approximately one-third of food produced globally is wasted\n- Food waste accounts for roughly 10% of global greenhouse gas emissions\n- Wasted food represents wasted water, energy, and resources throughout the supply chain\n\nHow Best By Bites addresses this:\n- Every bag redistributes food that would otherwise be discarded\n- Each transaction prevents approximately 2.7kg of CO2 equivalent emissions\n- Supports participating businesses in optimizing inventory management\n- Creates economic incentive for waste reduction\n\nBenefits for participants:\n- Financial savings through discounted purchases\n- Access to quality products at reduced cost\n- Participation in measurable environmental impact\n- Support for community businesses\n\nI'm Alex. Would you like more information about tracking your environmental impact?"
    },
    problem: {
      patterns: ['problem', 'issue', 'complaint', 'wrong', 'damaged', 'missing'],
      response: "If you experience an issue with your order:\n\nReport through the app:\n1. Open the app and navigate to 'My Orders'\n2. Select the relevant transaction\n3. Select 'Report an Issue'\n4. Provide a detailed description with supporting photos if applicable\n\nCommon issues addressed:\n- Product quality concerns\n- Missing items from order\n- Discrepancies between contents and listing\n- Store-related issues\n\nResponse times:\n- Standard response: Within 24 hours\n- Business hours response: Usually within hours\n\nAdditional support:\n- In-app support contact\n- Email: support@bestbybites.com\n- Live chat (available during business hours)\n\nI'm Alex. We're committed to resolving issues promptly. What specific issue are you reporting?"
    },
    subscription: {
      patterns: ['subscription', 'fee', 'cost', 'charge', 'free', 'payment'],
      response: "Best By Bites operates on a free platform model.\n\nNo fees for:\n- App download\n- Account creation\n- Browsing surprise bags and parcels\n- Push notifications\n- Ask-a-Friend feature\n- All platform features and content\n\nYou only pay for:\n- Surprise bags or parcels you purchase\n- Transaction cost equals the discounted price listed\n\nNo hidden charges:\n- No monthly subscriptions\n- No annual membership fees\n- No registration costs\n- No service fees beyond item cost\n\nI'm Alex. The business model is supported through commissions from participating retailers. You can start using the service immediately without any financial commitment."
    },
    international: {
      patterns: ['international', 'abroad', 'country', 'travel', 'global', 'worldwide'],
      response: "Yes, Best By Bites operates in 19 countries across multiple regions.\n\nOperating locations:\nEurope: United Kingdom, France, Germany, Belgium, Netherlands, Spain, Denmark, Sweden, Italy, Poland\nOther regions: Canada, Australia, and additional countries\n\nUsing the service internationally:\n1. Download the app before traveling (or download in your destination)\n2. Update your location to your travel destination\n3. Browse and purchase from local participating retailers\n4. Same process and interface as your home location\n\nConsiderations:\n- Most major cities have active retailer networks\n- Local currency and payment methods apply\n- Collection process is identical to other locations\n- Favorites and history travel with your account\n\nI'm Alex. Which country or region are you interested in?"
    },
    location: {
      patterns: ['location preference', 'update', 'settings', 'address', 'home'],
      response: "To modify your location settings:\n\nIn the app:\n1. Navigate to your profile (typically bottom right)\n2. Select 'Settings'\n3. Choose 'Location Preferences'\n4. Toggle location access to 'On'\n5. Select 'Always' or 'While Using App'\n6. Edit primary and secondary addresses as needed\n\nLocation benefits:\n- Receive notifications for nearby participating stores\n- Personalized recommendations based on your area\n- Optimized search results for convenience\n- Ability to set multiple locations (home, work, other areas)\n\nCustomization options:\n- Search radius (adjustable from 1-5 km)\n- Preferred collection times\n- Store types of interest\n- Notification frequency preferences\n\nI'm Alex. Do you need assistance with any specific location settings?"
    },
    environmental_impact: {
      patterns: ['environmental', 'impact', 'co2', 'emissions', 'carbon', 'trees'],
      response: "Each transaction generates measurable environmental benefits:\n\nPer Surprise Bag impact:\n- CO2 emissions prevented: 2.7kg\n- Resources preserved: Water, energy, transportation\n- Landfill reduction: Prevents methane-producing decomposition\n- Supply chain efficiency: Reduces redundant processes\n\nCumulative impact:\n- 10 bags collected: 27kg CO2 equivalent (equivalent to one tree planted)\n- 50 bags collected: 135kg CO2 equivalent\n- 100 bags collected: 270kg CO2 equivalent (similar to 1,000km flight)\n\nScaled impact:\n- 1 million users purchasing regularly\n- Combined annual prevention: 27,000+ kg CO2 equivalent\n- Comparable to planting thousands of trees annually\n- Measurable contribution to emission reduction targets\n\nI'm Alex. The app provides a personal impact tracker. Would you like information on how to access this feature?"
    },
    payment: {
      patterns: ['payment', 'card', 'pay', 'apple pay', 'google pay', 'visa'],
      response: "Best By Bites accepts multiple payment options:\n\nCard payments:\n- Visa\n- Mastercard\n- American Express\n- Debit cards\n\nDigital payment methods:\n- Apple Pay\n- Google Pay\n- PayPal\n- Contactless payment (where available)\n\nSecurity measures:\n- All transactions are encrypted\n- PCI DSS compliance verified\n- Data protection standards maintained\n- No unnecessary data retention\n\nTo add payment method:\n1. Open the app\n2. Navigate to Profile\n3. Select 'Payment Methods'\n4. Add your preferred payment option\n5. Complete verification and save\n\nI'm Alex. Is there a specific payment method you'd like to set up?"
    },
    goodbye: {
      patterns: ['goodbye', 'thanks', 'thank you', 'bye', 'see you'],
      response: "You're very welcome. It's been a pleasure assisting you today. My name is Alex, and I'm always here if you have additional questions in the future. Thank you for choosing Best By Bites and for being part of our food waste reduction initiative. Have a wonderful day!"
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findMatchingResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    for (const [key, data] of Object.entries(knowledgeBase)) {
      if (data.patterns.some(pattern => input.includes(pattern))) {
        return data.response;
      }
    }
    
    // Default response if no match found
    return "I appreciate your question. I'm Alex from Best By Bites. While I specialize in helping with our app, surprise bags, parcels, and food waste reduction initiatives, I might not have covered that specific topic. Could you try asking about downloading the app, how to collect surprise bags, finding deals in your area, or any of our other features? I'm here to help!";
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simulate slight delay for better UX
    setTimeout(() => {
      const botReply = findMatchingResponse(inputValue);
      const botMessage = {
        id: messages.length + 2,
        text: botReply,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
      >
        <MessageCircle size={28} />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-green-900 text-white p-4 md:p-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg md:text-xl font-bold">Best By Bites</h3>
          <p className="text-xs md:text-sm text-green-100">Alex here to help!</p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-green-800 p-2 rounded-lg transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs md:max-w-sm px-4 py-3 rounded-lg ${
                message.sender === 'user'
                  ? 'bg-green-500 text-white rounded-br-none'
                  : 'bg-gray-200 text-gray-900 rounded-bl-none'
              } text-sm md:text-base leading-relaxed`}
            >
              {message.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-200 text-gray-900 px-4 py-3 rounded-lg rounded-bl-none">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-gray-900 rounded-full animate-bounce" />
                <div className="w-2 h-2 bg-gray-900 rounded-full animate-bounce delay-100" />
                <div className="w-2 h-2 bg-gray-900 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4 md:p-6">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-sm md:text-base"
            disabled={isLoading}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading || !inputValue.trim()}
            className="bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white p-2 rounded-lg transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestByBitesChatbot;