import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { onboardReq } from "@/shared/lib/fetch";
import {
  availability,
  skillLevels,
  sports,
  steps,
  useWelcomeState,
} from "@/shared/state/welcome";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { parseAsStringLiteral, useQueryState } from "nuqs";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function WelcomePage() {
  // const router = useNavigate();
  const {
    selectedSports,
    setSelectedSports,
    selectedAvailability,
    setSelectedAvailability,
    selectedSkillLevel,
    setSelectedSkillLevel,
    loading,
    setLoading,
  } = useWelcomeState();
  // const [step, setStep] = useState<Step>("welcome");

  const [step, setStep] = useQueryState(
    "step",
    parseAsStringLiteral(steps).withDefault("welcome"),
  );

  const handleSelectSport = (sportId: string) => {
    setSelectedSports(sportId);
  };

  const handleSelectAvailability = (availId: string) => {
    setSelectedAvailability(availId);
  };

  const handleSkillLevelSelect = (sportId: string, skillId: string) => {
    setSelectedSkillLevel(sportId, skillId);
  };

  const handleComplete = async () => {
    setLoading();

    try {
      const response = await onboardReq(
        selectedSports,
        selectedSkillLevel,
        selectedAvailability,
      );
      console.log({ response });

      // await new Promise((resolve) => setTimeout(resolve, 5000));
      // router("/dashboard");
    } catch (err) {
      toast.error(err.message ?? "Error while completing onboarding");
    } finally {
      setLoading();
    }
  };

  const renderWelcomeStep = () => (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
        <span className="text-5xl">🎉</span>
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        Welcome to Playday!
      </h1>
      <p className="text-foreground/70 mb-8 max-w-md mx-auto">
        Let's set up your profile so we can find you the perfect games and
        teammates. It only takes a few minutes.
      </p>
      <Button
        onClick={() => setStep("sports")}
        size="lg"
        className="gap-2 cursor-pointer"
      >
        Get Started
        <ArrowRight size={20} />
      </Button>
    </div>
  );

  const renderSportsStep = () => (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">
        What sports do you play?
      </h2>
      <p className="text-foreground/70 mb-8">
        Select all that apply. You can add more later.
      </p>

      <div className="grid grid-cols-2 gap-3 mb-8">
        {sports.map((sport) => (
          <button
            key={sport.id}
            onClick={() => handleSelectSport(sport.id)}
            className={`p-4 rounded-lg border-2 transition-all text-center ${
              selectedSports.includes(sport.id)
                ? "border-primary bg-primary/10"
                : "border-border/30 bg-card hover:border-border"
            }`}
          >
            <div className="text-3xl mb-2">{sport.emoji}</div>
            <div className="text-sm font-medium text-foreground">
              {sport.name}
            </div>
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={() => setStep("welcome")}
          className="gap-2 cursor-pointer"
        >
          <ChevronLeft size={18} />
          Back
        </Button>
        <Button
          onClick={() => selectedSports.length > 0 && setStep("skill")}
          disabled={selectedSports.length === 0}
          className="flex-1 gap-2"
        >
          Next
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );

  const renderSkillStep = () => (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">
        What's your skill level?
      </h2>
      <p className="text-foreground/70 mb-6">
        Set your skill level for each sport
      </p>

      <div className="space-y-6 mb-8">
        {selectedSports.map((sportId) => {
          const sport = sports.find((s) => s.id === sportId);
          return (
            <div key={sportId}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{sport?.emoji}</span>
                <h3 className="font-semibold text-foreground">{sport?.name}</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {skillLevels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => handleSkillLevelSelect(sportId, level.id)}
                    className={`p-3 rounded-lg border transition-all text-left text-sm ${
                      selectedSkillLevel[sportId] === level.id
                        ? "border-primary bg-primary/10"
                        : "border-border/30 bg-card hover:border-border"
                    }`}
                  >
                    <div className="font-medium text-foreground">
                      {level.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {level.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={() => setStep("sports")}
          className="gap-2"
        >
          <ChevronLeft size={18} />
          Back
        </Button>
        <Button
          onClick={() => setStep("availability")}
          disabled={selectedSports.some((s) => !selectedSkillLevel[s])}
          className="flex-1 gap-2"
        >
          Next
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );

  const renderAvailabilityStep = () => (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-2">
        When are you available?
      </h2>
      <p className="text-foreground/70 mb-8">
        Select your preferred times to play
      </p>

      <div className="grid grid-cols-1 gap-3 mb-8">
        {availability.map((slot) => (
          <button
            key={slot.id}
            onClick={() => handleSelectAvailability(slot.id)}
            className={`p-4 rounded-lg border-2 transition-all flex items-center gap-3 ${
              selectedAvailability.includes(slot.id)
                ? "border-primary bg-primary/10"
                : "border-border/30 bg-card hover:border-border"
            }`}
          >
            <span className="text-2xl">{slot.emoji}</span>
            <span className="font-medium text-foreground">{slot.label}</span>
            {selectedAvailability.includes(slot.id) && (
              <span className="ml-auto text-primary font-bold">✓</span>
            )}
          </button>
        ))}
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={() => setStep("skill")}
          className="gap-2"
        >
          <ChevronLeft size={18} />
          Back
        </Button>
        <Button
          onClick={() => setStep("complete")}
          disabled={selectedAvailability.length === 0}
          className="flex-1 gap-2"
        >
          Next
          <ArrowRight size={18} />
        </Button>
      </div>
    </div>
  );

  const renderCompleteStep = () => (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
        <span className="text-5xl">🎊</span>
      </div>
      <h2 className="text-2xl font-bold text-foreground mb-3">
        You're All Set!
      </h2>
      <p className="text-foreground/70 mb-4 max-w-md mx-auto">
        Your profile is ready. Now go find your next game and start playing!
      </p>

      <div className="bg-secondary/50 rounded-lg p-6 mb-8">
        <div className="text-left space-y-2">
          <div className="text-sm">
            <span className="font-semibold text-foreground">Sports: </span>
            <span className="text-foreground/70">
              {selectedSports.length} selected
            </span>
          </div>
          <div className="text-sm">
            <span className="font-semibold text-foreground">
              Availability:{" "}
            </span>
            <span className="text-foreground/70">
              {selectedAvailability.length} time slots
            </span>
          </div>
          <div className="text-sm">
            <span className="font-semibold text-foreground">
              Skill Levels:{" "}
            </span>
            <span className="text-foreground/70">Customized per sport</span>
          </div>
        </div>
      </div>

      <Button
        onClick={handleComplete}
        disabled={loading}
        size="lg"
        className="w-full gap-2"
      >
        {loading ? "Setting up..." : "Start Playing"}
        {!loading && <ArrowRight size={20} />}
      </Button>
    </div>
  );

  return (
    <main className="min-h-screen bg-background p-4 py-12">
      <div className="max-w-2xl mx-auto">
        {/* <div className="text-center mb-12">
          <div className="text-3xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-2">
            PLAYDAY
          </div>
        </div> */}

        {step !== "welcome" && step !== "complete" && (
          <div className="mb-12">
            <div className="flex items-center justify-between mb-2 text-sm text-muted-foreground">
              <span>
                Step {["sports", "skill", "availability"].indexOf(step) + 1} of
                3
              </span>
            </div>
            <div className="w-full h-2 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{
                  width: `${((["sports", "skill", "availability"].indexOf(step) + 1) / 3) * 100}%`,
                }}
              />
            </div>
          </div>
        )}

        {/* Content Card */}
        <Card className="bg-card border-border/50 p-8">
          {step === "welcome" && renderWelcomeStep()}
          {step === "sports" && renderSportsStep()}
          {step === "skill" && renderSkillStep()}
          {step === "availability" && renderAvailabilityStep()}
          {step === "complete" && renderCompleteStep()}
        </Card>

        {/* Footer Links */}
        {step === "welcome" && (
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              Want to explore first?{" "}
              <Link
                to="/dashboard"
                className="text-primary font-semibold hover:underline"
              >
                Skip for now
              </Link>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
